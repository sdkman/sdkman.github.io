import clsx from 'clsx';
import styles from './styles.module.scss';

type Props = {
  className: string;
  src: string;
  alt: string;
};

export default function AvatarImage({ className, src, alt }: Props) {
  if (!src) {
    const name = generateAvatar(alt);
    return <span className={clsx(styles.avatarImage, className)}>{name}</span>;
  }

  return (
    <img className={clsx(styles.avatarImage, className)} src={src} alt={alt} />
  );
}

function generateAvatar(value: string) {
  const parts = value.split(' ');

  if (parts.length === 1) {
    return parts[0].slice(0, 2).toLocaleUpperCase();
  }

  return `${parts[0].charAt(0)}${parts[parts.length - 1].charAt(0)}`.toLocaleUpperCase();
}
