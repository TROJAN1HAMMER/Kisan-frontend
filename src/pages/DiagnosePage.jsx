import { Button } from "@/components/ui/button";
import { useState } from "react";

const Diagnose = () => {
  const [image, setImage] = useState(null);

  const handleScan = () => {
    alert("Scanning image... (Mocked functionality)");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">🧪 Diagnose Crop Disease</h2>

      <div className="border border-dashed border-gray-400 p-4 rounded-lg text-center">
        {image ? (
          <img src={URL.createObjectURL(image)} alt="preview" className="mx-auto h-48 object-contain" />
        ) : (
          <p className="text-gray-500">Upload or click to capture an image</p>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="mt-4"
        />
      </div>

      <div className="mt-6 text-center">
        <Button onClick={handleScan}>Diagnose</Button>
      </div>
    </div>
  );
};

export default Diagnose;
