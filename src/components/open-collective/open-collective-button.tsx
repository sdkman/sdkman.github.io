import Image from 'next/image';

function OpenCollectiveButton() {
  return (
    <a
      href="https://opencollective.com/sdkman/contribute"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/img/open-collective-button.png"
        alt="Donate"
        width={240}
        height={35}
        loading="lazy"
      />
    </a>
  );
}

export { OpenCollectiveButton };
