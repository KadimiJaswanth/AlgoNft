/**
 * SendPaymentForm component
 * Form for sending Algorand payments
 */

import React from 'react';
import { Button, Input, Textarea, Card } from '@/components/primitives';
import { useForm, useToast } from '@/hooks';
import { isValidAlgorandAddress, isValidAmount } from '@/utils/validators';
import { formatAmount } from '@/utils/format';

interface PaymentFormValues {
  recipient: string;
  amount: number;
  note: string;
}

interface SendPaymentFormProps {
  onSubmit?: (values: PaymentFormValues) => Promise<void>;
  maxAmount?: number;
  isLoading?: boolean;
}

/**
 * SendPaymentForm component
 * Form for sending ALGO payments
 *
 * TODO: Integrate with wallet signing and blockchain submission
 */
export const SendPaymentForm: React.FC<SendPaymentFormProps> = ({
  onSubmit,
  maxAmount,
  isLoading = false,
}) => {
  const { values, errors, setError, setValue, resetForm } = useForm<PaymentFormValues>({
    recipient: '',
    amount: 0,
    note: '',
  });

  const { success, error: showError } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!isValidAlgorandAddress(values.recipient)) {
      setError('recipient', 'Invalid Algorand address');
      return;
    }

    if (!isValidAmount(values.amount, maxAmount)) {
      setError(
        'amount',
        `Amount must be between 0 and ${maxAmount ? formatAmount(maxAmount) : 'any'}`
      );
      return;
    }

    try {
      if (onSubmit) {
        await onSubmit(values);
        success('Payment sent successfully!');
        resetForm();
      } else {
        console.log('TODO: Submit payment transaction', values);
        showError('TODO: Implement payment on blockchain');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Payment failed';
      showError(message);
    }
  };

  return (
    <Card
      header={<h3 className="text-lg font-semibold">Send Payment</h3>}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recipient */}
        <Input
          label="Recipient Address"
          placeholder="AAAAA...AAAAA"
          value={values.recipient}
          onChange={(e) => setValue('recipient', e.target.value)}
          error={errors.recipient}
          helperText="Algorand wallet address"
          required
        />

        {/* Amount */}
        <Input
          label="Amount (ALGO)"
          type="number"
          step="0.000001"
          min="0"
          max={maxAmount ? (maxAmount / 1_000_000).toString() : undefined}
          value={values.amount}
          onChange={(e) => setValue('amount', parseFloat(e.target.value) || 0)}
          error={errors.amount}
          helperText={maxAmount ? `Max: ${formatAmount(maxAmount)} ALGO` : undefined}
          required
        />

        {/* Note */}
        <Textarea
          label="Transaction Note (Optional)"
          placeholder="Add a note to this payment..."
          value={values.note}
          onChange={(e) => setValue('note', e.target.value)}
          helperText="Visible on blockchain"
          rows={2}
        />

        {/* Summary */}
        {values.amount > 0 && (
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-sm text-gray-600">
              You will send <span className="font-semibold">{values.amount} ALGO</span>
              {' '}to{' '}
              <span className="font-mono text-xs break-all">{values.recipient.slice(0, 12)}...</span>
            </p>
            <p className="text-xs text-gray-500 mt-2">
              Fee: 0.001 ALGO (included in total)
            </p>
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          isLoading={isLoading}
          disabled={isLoading}
        >
          Send Payment
        </Button>

        {/* TODO: Integrate with:
         * - Wallet signing (MyAlgo, AlgoSigner, WalletConnect)
         * - Payment transaction building
         * - Transaction submission and confirmation
         */}
      </form>
    </Card>
  );
};

SendPaymentForm.displayName = 'SendPaymentForm';
