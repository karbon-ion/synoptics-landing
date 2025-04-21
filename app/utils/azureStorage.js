/**
 * Azure Storage and SharePoint image processing utilities
 * Handles conversion of SharePoint image links to Azure Blob Storage URLs
 */

/**
 * Process HTML content to replace SharePoint image links with Azure Blob Storage URLs
 * @param {string} htmlContent - The HTML content containing SharePoint image links
 * @returns {string} - HTML content with SharePoint links replaced with Azure Blob Storage URLs
 */
export function processSharePointImages(htmlContent) {
  if (!htmlContent) return htmlContent;
  
  // Pattern to match SharePoint image URLs
  const sharePointPattern = /https:\/\/ihaconsulting239-my\.sharepoint\.com\/([a-zA-Z0-9-]+)/g;
  
  // Replace SharePoint URLs with Azure Blob Storage URLs
  const processedContent = htmlContent.replace(sharePointPattern, (match, imageId) => {
    // Convert to Azure Blob Storage URL
    return `https://blogimagesynoptix.blob.core.windows.net/images/${imageId}`;
  });
  
  return processedContent;
}

/**
 * Process image URL to handle SharePoint links
 * @param {string} imageUrl - The original image URL
 * @returns {string} - Processed image URL
 */
export function processImageUrl(imageUrl) {
  if (!imageUrl) return '';
  
  // Check if it's a SharePoint URL
  if (imageUrl.includes('sharepoint.com')) {
    // Extract the image ID from the SharePoint URL
    const match = imageUrl.match(/https:\/\/ihaconsulting239-my\.sharepoint\.com\/([a-zA-Z0-9-]+)/);
    if (match && match[1]) {
      // Convert to Azure Blob Storage URL
      return `https://blogimagesynoptix.blob.core.windows.net/images/${match[1]}`;
    }
  }
  
  // Return the original URL if it's not a SharePoint URL
  return imageUrl;
}
