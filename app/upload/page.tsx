'use client';

import React from 'react';
import { CldImage, CldUploadWidget } from 'next-cloudinary';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = React.useState('');
  return (
    <div>
      {publicId && (
        <CldImage
          className="mb-3"
          src={publicId}
          height={300}
          width={500}
          alt="image"
        />
      )}
      <CldUploadWidget
        options={{ sources: ['local', 'camera'], multiple: true }}
        uploadPreset="bzaqqfvx"
        onSuccess={(result, widget) => {
          if (result.event !== 'success') return;
          setPublicId((result.info as CloudinaryResult).public_id);

          console.log(result);
        }}
      >
        {({ open }) => (
          <button onClick={() => open()} className="btn btn-primary">
            Upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
