import { PDFDocument, rgb } from "pdf-lib";

const createPDFWithImageAndText = async (
  imageUrl: string,
  email: string,
  userIQ: number
) => {
  try {
    // Fetch the image
    const imageBytes = await fetch(imageUrl).then((res) => {
      if (!res.ok) {
        throw new Error("Image not found");
      }
      return res.arrayBuffer();
    });

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([842, 595]); // Set page size to 842x595

    let image;
    try {
      image = await pdfDoc.embedJpg(imageBytes);
    } catch (e) {
      image = await pdfDoc.embedPng(imageBytes);
    }

    // Draw the image on the page, covering the entire page
    page.drawImage(image, {
      x: 0,
      y: 0,
      width: 842,
      height: 595,
    });

    // Get the current date
    const currentDate = new Date().toLocaleDateString();

    // Add the text overlay with black color
    page.drawText(email, {
      x: 63,
      y: page.getHeight() / 2 + 40,
      size: 20,
      color: rgb(0, 0, 0), // Change text color to black
    });

    page.drawText(`${userIQ}`, {
      x: 63,
      y: 50, // Position the text 30 points from the bottom
      size: 50,
      color: rgb(0, 0, 0), // Change text color to black
    });

    page.drawText(`Date: ${currentDate}`, {
      x: 370,
      y: 50, // Position the text 30 points from the bottom
      size: 20,
      color: rgb(0, 0, 0), // Change text color to black
    });

    // Serialize the PDF document to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();

    // Create a Blob from the PDF bytes
    const pdfBlob = new Blob([pdfBytes], { type: "application/pdf" });

    // Create a URL for the Blob
    const pdfUrl = URL.createObjectURL(pdfBlob);

    return pdfUrl;
  } catch (error) {
    console.error("Error creating PDF:", error);
    return null;
  }
};

export default createPDFWithImageAndText;
