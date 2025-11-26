/**
 * MintForm component
 * Form for creating/minting NFTs
 */

import React, { useState, useEffect } from 'react';
import { Button, Input, Textarea, Card } from '@/components/primitives';
import { useForm } from '@/hooks';
import { useToast } from '@/hooks';
import { isValidAssetName, isValidUnitName, isValidTotal } from '@/utils/validators';

interface MintFormValues {
  assetName: string;
  unitName: string;
  total: number;
  decimals: number;
  description: string;
  ipfsHash: string;
  imageDataUrl?: string;
}

interface MintFormProps {
  onSubmit?: (values: MintFormValues) => Promise<void>;
  onChange?: (values: MintFormValues) => void;
  isLoading?: boolean;
}

/**
 * MintForm component
 * Form for minting NFTs with validation
 *
 * TODO: Submit to blockchain using wallet signing
 */
export const MintForm: React.FC<MintFormProps> = ({
  onSubmit,
  onChange,
  isLoading = false,
}) => {
  const { values, errors, setError, setValue, resetForm } = useForm<MintFormValues>({
    assetName: '',
    unitName: '',
    total: 1,
    decimals: 0,
    description: '',
    ipfsHash: '',
  });

  const { success, error: showError } = useToast();
  const [imagePreview, setImagePreview] = useState<string | undefined>(undefined);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!isValidAssetName(values.assetName)) {
      setError('assetName', 'Asset name must be 1-32 characters');
      return;
    }
    if (!isValidUnitName(values.unitName)) {
      setError('unitName', 'Unit name must be 1-8 characters');
      return;
    }
    if (!isValidTotal(values.total, values.decimals)) {
      setError('total', 'Invalid total supply for given decimals');
      return;
    }
    if (!values.ipfsHash) {
      setError('ipfsHash', 'IPFS hash is required');
      return;
    }

    try {
      if (onSubmit) {
        await onSubmit(values);
        success('NFT minted successfully!');
        resetForm();
      } else {
        console.log('TODO: Submit NFT mint transaction', values);
        showError('TODO: Implement minting on blockchain');
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to mint NFT';
      showError(message);
    }
  };

  // Emit live changes to parent
  useEffect(() => {
    const out: MintFormValues = {
      ...values,
      imageDataUrl: imagePreview,
    };
    onChange?.(out);
  }, [values, imagePreview, onChange]);

  const handleFile = (file?: File) => {
    if (!file) return setImagePreview(undefined);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(String(reader.result || ''));
    };
    reader.readAsDataURL(file);
  };

  return (
    <Card
      header={<h3 className="text-lg font-semibold">Mint NFT</h3>}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Asset Name */}
        <Input
          label="Asset Name"
          placeholder="My Awesome NFT"
          value={values.assetName}
          onChange={(e) => setValue('assetName', e.target.value)}
          error={errors.assetName}
          helperText="1-32 characters"
          required
        />

        {/* Unit Name */}
        <Input
          label="Unit Name"
          placeholder="MYNFT"
          value={values.unitName}
          onChange={(e) => setValue('unitName', e.target.value)}
          error={errors.unitName}
          helperText="1-8 characters (ticker)"
          required
        />

        {/* Total Supply */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Total Supply"
            type="number"
            min="1"
            value={values.total}
            onChange={(e) => setValue('total', parseInt(e.target.value))}
            error={errors.total}
            required
          />

          {/* Decimals */}
          <Input
            label="Decimals"
            type="number"
            min="0"
            max="19"
            value={values.decimals}
            onChange={(e) => setValue('decimals', parseInt(e.target.value))}
            helperText="0-19"
          />
        </div>

        {/* Description */}
        <Textarea
          label="Description"
          placeholder="Describe your NFT..."
          value={values.description}
          onChange={(e) => setValue('description', e.target.value)}
          rows={3}
        />

        {/* Image Upload + IPFS Hash */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFile(e.target.files ? e.target.files[0] : undefined)}
            className="block w-full text-sm text-gray-600"
          />
          {imagePreview && (
            <div className="pt-2">
              <img src={imagePreview} alt="preview" className="w-32 h-auto rounded-md border" />
            </div>
          )}

          <Input
            label="IPFS Hash"
            placeholder="QmXxxx... or bafk..."
            value={values.ipfsHash}
            onChange={(e) => setValue('ipfsHash', e.target.value)}
            error={errors.ipfsHash}
            helperText="IPFS content hash for metadata (optional)"
          />
        </div>

        {/* Submit Button */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            type="submit"
            fullWidth
            isLoading={isLoading}
            disabled={isLoading}
          >
            Mint NFT
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => {
              // Download metadata JSON
              const metadata = {
                name: values.assetName || 'Unnamed NFT',
                description: values.description || '',
                unitName: values.unitName || '',
                decimals: values.decimals,
                total: values.total,
                image: imagePreview || undefined,
                ipfsHash: values.ipfsHash || undefined,
              };
              const blob = new Blob([JSON.stringify(metadata, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${(values.assetName || 'nft').replace(/\s+/g, '_')}_metadata.json`;
              a.click();
              URL.revokeObjectURL(url);
            }}
          >
            Download Metadata
          </Button>
        </div>

        {/* TODO: Add integration with:
         * - Wallet signing (MyAlgo, AlgoSigner, WalletConnect)
         * - Asset creation transaction building
         * - Transaction confirmation and polling
         */}
      </form>
    </Card>
  );
};

MintForm.displayName = 'MintForm';
