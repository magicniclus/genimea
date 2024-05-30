import { UserState } from "@/redux/dataUserManager";
import React from "react";
import createPDFWithImageAndText from "./createPdfWithImageAndText";

interface SettingsProps {
  data: UserState;
}

const PdfGenerator: React.FC<SettingsProps> = ({ data }) => {
  const handleGeneratePDF = async () => {
    const pdfUrl = await createPDFWithImageAndText(
      "/images/certificatEnNeutre.png", // Make sure this path is correct
      data.email,
      data.userIQ || 0 // Provide a default value if userIQ is null
    );

    if (pdfUrl) {
      // Create a link element
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = "generated.pdf";

      // Append the link to the body
      document.body.appendChild(link);

      // Programmatically click the link to trigger the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    }
  };

  return (
    <div className="bg-slate-50 mt-10 rounded-md">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Your IQ results are ready!
          <br />
          Download your official IQ certificate now.
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <button
            onClick={handleGeneratePDF}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfGenerator;
