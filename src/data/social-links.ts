import {
  FaBluesky,
  FaDiscord,
  FaGithub,
  FaMastodon,
  FaStackOverflow,
  FaXTwitter,
} from 'react-icons/fa6';

const socialLinks = [
  {
    icon: FaGithub,
    href: 'https://github.com/sdkman',
    alt: 'GitHub',
  },
  {
    icon: FaDiscord,
    href: 'https://discord.gg/y9mVJYVyu4',
    alt: 'Discord',
  },
  {
    icon: FaBluesky,
    href: 'https://bsky.app/profile/sdkman.io',
    alt: 'Bluesky',
  },
  {
    icon: FaMastodon,
    href: 'https://mastodon.social/@sdkman@fosstodon.org',
    alt: 'Mastodon',
  },
  {
    icon: FaXTwitter,
    href: 'https://x.com/sdkman_',
    alt: 'X',
  },
  {
    icon: FaStackOverflow,
    href: 'http://stackoverflow.com/questions/tagged/sdkman',
    alt: 'Stack Overflow',
  },
];

export default socialLinks;
