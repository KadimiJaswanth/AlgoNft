/**
 * MintPreview component
 * Shows preview of NFT being minted
 */

import React from 'react';
import { Card, Badge } from '@/components/primitives';
import { NFT_PLACEHOLDER_IMAGE } from '@/utils/constants';

interface MintPreviewProps {
  name: string;
  description: string;
  unitName: string;
  total: number;
  decimals: number;
  image?: string;
  ipfsHash?: string;
}

/**
 * MintPreview component
 * Displays a preview of the NFT being minted
 */
export const MintPreview: React.FC<MintPreviewProps> = ({
  name,
  description,
  unitName,
  total,
  decimals,
  image = NFT_PLACEHOLDER_IMAGE,
  ipfsHash,
}) => {
  return (
    <Card>
      <div className="space-y-4">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={image}
            alt={name}
            className="w-full max-w-xs h-auto rounded-lg border border-gray-200"
            onError={(e) => {
              (e.target as HTMLImageElement).src = NFT_PLACEHOLDER_IMAGE;
            }}
          />
        </div>

        {/* Name and Unit */}
        <div>
          <h3 className="text-xl font-semibold">{name || 'Unnamed NFT'}</h3>
          <Badge variant="info" className="mt-2">
            {unitName || 'TKN'}
          </Badge>
        </div>

        {/* Description */}
        {description && (
          <p className="text-gray-600 text-sm">{description}</p>
        )}

        {/* Properties */}
        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Total Supply</p>
            <p className="text-lg font-semibold mt-1">{total}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide">Decimals</p>
            <p className="text-lg font-semibold mt-1">{decimals}</p>
          </div>
        </div>

        {/* IPFS Hash */}
        {ipfsHash && (
          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-gray-500 uppercase tracking-wide">IPFS Hash</p>
            <p className="font-mono text-xs mt-1 break-all text-gray-600">
              {ipfsHash}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

MintPreview.displayName = 'MintPreview';
