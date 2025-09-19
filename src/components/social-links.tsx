import Link from 'next/link';

import socialLinks from '@/data/social-links';

function SocialLinks() {
  return (
    <ul className="flex items-center gap-6">
      {socialLinks.map((link, idx) => (
        <li key={`social-link-${idx}`}>
          <Link href={link.url} className="hover:text-link-highlight">
            <link.icon />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export { SocialLinks };
