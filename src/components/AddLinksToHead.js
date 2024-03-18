import React, { useEffect } from 'react';

const AddLinksToHead = ({ links }) => {
  useEffect(() => {
    const head = document.querySelector('head');
    if (!head) return;

    links.forEach((link) => {
      const { rel, href, as } = link;
      const linkTag = document.createElement('link');
      linkTag.rel = rel;
      linkTag.href = href;
      if (as) {
        linkTag.as = as;
      }
      head.appendChild(linkTag);
    });

    return () => {
      links.forEach((link) => {
        const { rel, href } = link;
        const existingLink = head.querySelector(`link[rel="${rel}"][href="${href}"]`);
        if (existingLink) {
          head.removeChild(existingLink);
        }
      });
    };
  }, [links]);

  return null;
};

export default AddLinksToHead;