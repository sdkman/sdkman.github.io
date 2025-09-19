import ArrowsClockIcon from '@/components/icons/arrows-clock-icon';
import CodeIcon from '@/components/icons/code-icon';
import DukeIcon from '@/components/icons/duke-icon';
import GearIcon from '@/components/icons/gear-icon';
import ListIcon from '@/components/icons/list-icon';
import SettingsIcon from '@/components/icons/settings-icon';

export const features = [
  {
    icon: ArrowsClockIcon,
    title: 'By Developers, for Developers',
    description: `
      Simplifying life. No more hunting for downloads, extracting
      archives, or tinkering with
      <code>HOME</code> and <code>PATH</code> environment variables.
    `,
  },
  {
    icon: DukeIcon,
    title: 'Java all the way down',
    description: `
      Install Software Development Kits for the JVM such as Java, Scala,
      Kotlin and Groovy. Ant, Gradle, Grails, Maven, SBT, Spark, Spring
      Boot, Vert.x and many others also supported.
    `,
  },
  {
    icon: GearIcon,
    title: 'Lightweight',
    description: `
      Written in Rust and bash and only requires <strong>curl</strong>,
      <strong>zip</strong>, and
      <strong>unzip</strong> dependencies to be present on your system.
      Even works with
      <a href="http://www.zsh.org/">ZSH</a> too.
    `,
  },
  {
    icon: CodeIcon,
    title: 'Multi-platform',
    description: `
      Operates seamlessly across various UNIX-based platforms,
      including macOS, Linux, and Windows Subsystem for Linux (WSL)
      on Windows.
    `,
  },
  {
    icon: SettingsIcon,
    title: 'APIs',
    description: `
      New Clients can easily be written by consuming our open Broker
      API. Vendors can publish and announce their own releases
      through a secure Vendor API.
    `,
  },
  {
    icon: ListIcon,
    title: 'Open Source',
    description: `
      Backed by a global community of developers.
      <br />
      Licensed under
      <a href="http://www.apache.org/licenses/LICENSE-2.0.html">
        Apache 2.0
      </a>
    `,
  },
];
