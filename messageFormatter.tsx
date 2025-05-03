
import React from 'react';

/**
 * Formats the message text by handling tips and resource links appropriately
 */
export const formatMessage = (text: string) => {
  // Check if the message explicitly requests tips or resources
  const requestsTips = text.toLowerCase().includes('give me tips') || 
                      text.toLowerCase().includes('show me tips') || 
                      text.toLowerCase().includes('need tips') ||
                      text.toLowerCase().includes('want tips');
                      
  const requestsResources = text.toLowerCase().includes('resources') ||
                           text.toLowerCase().includes('help with') ||
                           text.toLowerCase().includes('information on');
  
  // Split the message by "Tips:" to separate the main content from tips
  const tipsParts = text.split(/Tips:|TIPS:|Tips :|TIPS :/i);
  
  // Split the message by "Resources:" to separate content from resources section
  const resourceParts = text.split(/Resources:|RESOURCES:|Resources :|RESOURCES :/i);
  
  // If user explicitly requests tips or resources, or if there's only one part (no tips/resources section)
  // then return the full text
  if ((tipsParts.length === 1 && resourceParts.length === 1) || 
      requestsTips || requestsResources) {
    // Process links in the text to make them clickable
    const processedText = processLinks(text);
    return <div className="message-content">{processedText}</div>;
  }
  
  // Process the main content (before any "Tips:" or "Resources:" sections)
  let mainContent = text;
  
  // If there are Tips sections, use only the content before it
  if (tipsParts.length > 1) {
    mainContent = tipsParts[0].trim();
  }
  
  // If there are Resource sections and they come before any Tips section, use only the content before it
  if (resourceParts.length > 1) {
    const resourceStart = text.toLowerCase().indexOf('resources:');
    const tipsStart = text.toLowerCase().indexOf('tips:');
    
    if (tipsStart === -1 || (resourceStart < tipsStart && resourceStart !== -1)) {
      mainContent = resourceParts[0].trim();
    }
  }
  
  // Process any links in the main content
  const processedContent = processLinks(mainContent);
  
  return <div className="message-content">{processedContent}</div>;
};

/**
 * Processes text to convert URLs into clickable links
 */
const processLinks = (text: string) => {
  if (!text) return null;
  
  // Split the text by lines
  const lines = text.split('\n');
  
  return (
    <>
      {lines.map((line, index) => {
        // Check if the line contains a URL
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const urlMatches = line.match(urlRegex);
        
        if (!urlMatches) {
          // If no URLs in this line, just return the line with a line break
          return (
            <React.Fragment key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </React.Fragment>
          );
        }
        
        // If line has URLs, split by URLs and create link elements
        const parts = line.split(urlRegex);
        const composedLine = [];
        
        parts.forEach((part, partIndex) => {
          // Add the text part
          composedLine.push(part);
          
          // Add the URL part (if there is one at this position)
          if (partIndex < urlMatches.length) {
            composedLine.push(
              <a 
                key={`link-${index}-${partIndex}`}
                href={urlMatches[partIndex]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline hover:text-blue-700"
              >
                {urlMatches[partIndex]}
              </a>
            );
          }
        });
        
        return (
          <React.Fragment key={index}>
            {composedLine}
            {index < lines.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </>
  );
};
