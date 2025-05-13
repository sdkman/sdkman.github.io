const vendors = [
  {
    id: 'amzn',
    vendor: 'Amazon',
    distribution: 'Corretto',
    url: 'https://aws.amazon.com/corretto/',
    description: `Amazon Corretto is a no-cost, multiplatform, production-ready distribution
      of the Open Java Development Kit (OpenJDK). Corretto comes with long-term
      support that will include performance enhancements and security fixes.
      Amazon runs Corretto internally on thousands of production services and
      Corretto is certified as compatible with the Java SE standard. With
      Corretto, you can develop and run Java applications on popular operating
      systems, including Linux, Windows, and macOS.`,
  },
  {
    id: 'alibaba',
    vendor: 'Alibaba',
    distribution: 'Dragonwell',
    url: 'https://dragonwell-jdk.io',
    description: `Dragonwell, as a downstream version of OpenJDK, is the in-house
      OpenJDK implementation at Alibaba. It is optimized for online e-commerce,
      financial and logistics applications running on 100,000+ servers. Alibaba
      Dragonwell is the engine that runs these distributed Java applications in
      extreme scaling.`,
  },
  {
    id: 'bisheng',
    vendor: 'Huawei',
    distribution: 'BiSheng',
    url: 'https://www.openeuler.org/en/other/projects/bishengjdk/',
    description: `BiSheng JDK, an open-source adaptation of Huawei JDK derived from
      OpenJDK, is utilized across 500+ Huawei products, benefitting from
      the R&D team's extensive experience in addressing service-related
      challenges. As a downstream product of OpenJDK, it serves as a
      high-performance distribution for production environments,
      specifically addressing performance and stability issues in Huawei
      applications. BiSheng JDK excels in optimizing ARM architecture
      performance and stability, delivering enhanced results in big data
      scenarios. Its primary goal is to offer Java developers a stable,
      high-performance JDK, particularly excelling on the ARM architecture.`,
  },
  {
    id: 'graal',
    vendor: 'Oracle',
    distribution: 'GraalVM',
    url: 'https://www.graalvm.org/',
    description: `Oracle GraalVM is the free GraalVM distribution from Oracle, based on
      Oracle JDK, and includes the high-performance Graal JIT compiler.
      GraalVM can compile Java applications ahead of time into standalone
      binaries that start instantly, scale fast, and use fewer compute
      resources. Oracle GraalVM Native Image provides advanced features
      including G1 GC, SBOM, as well as performance and size optimizations.
      It also makes it possible to embed Python, JavaScript, Ruby, and other
      languages into Java applications.`,
  },
  {
    id: 'graalce',
    vendor: 'GraalVM Community',
    distribution: 'GraalVM',
    url: 'https://www.graalvm.org/',
    description: `GraalVM CE is the open source distribution of GraalVM, based on OpenJDK,
      and includes the high-performance Graal JIT compiler. GraalVM can
      compile Java applications ahead of time into standalone binaries that
      start instantly, scale fast, and use fewer compute resources. It also
      makes it possible to embed Python, JavaScript, Ruby, and other languages
      into Java applications.`,
  },
  {
    id: 'kona',
    vendor: 'Tencent',
    distribution: 'Kona',
    url: 'https://tencent.github.io/konajdk/',
    description: `Tencent Kona is a free, multi-platform, and production-ready distribution
      of OpenJDK, featuring Long-Term Support (LTS) releases. It serves as the
      default JDK within Tencent for cloud computing, big data, and numerous
      other Java applications.`,
  },
  {
    id: 'oracle',
    vendor: 'Oracle',
    distribution: 'Java SE Development Kit',
    url: 'https://www.oracle.com/java/',
    description: `This proprietary Java Development Kit is an implementation of the Java Platform,
      Standard Edition released by Oracle Corporation in the form of a binary
      product aimed at Java developers on Linux, macOS or Windows. The JDK
      includes a private JVM and a few other resources to finish the development
      of a Java application. It is distributed under the Oracle No-Fee Terms and
      Conditions License`,
  },
  {
    id: 'librca',
    vendor: 'Bellsoft',
    distribution: 'Liberica',
    url: 'https://bell-sw.com/',
    description: `Liberica is a 100% open-source Java implementation. It is built from
      OpenJDK which BellSoft contributes to, is thoroughly tested and passed the
      JCK provided under the license from OpenJDK. All supported versions of
      Liberica also contain JavaFX.`,
  },
  {
    id: 'nik',
    vendor: 'Bellsoft',
    distribution: 'Liberica NIK',
    url: 'https://bell-sw.com/pages/liberica-native-image-kit',
    description: `Liberica Native Image Kit is a utility that converts your JVM-based application
      into a fully compiled native executable ahead-of-time under the closed-world
      assumption with an almost instant startup time. Being compatible with various
      platforms, including lightweight musl-based Alpine Linux, it optimizes resource
      consumption and minimizes the static footprint.`,
  },
  {
    id: 'mandrel',
    vendor: 'Red Hat',
    distribution: 'Mandrel',
    url: 'https://github.com/graalvm/mandrel',
    description: `Mandrel focuses on GraalVM's native-image component in order to provide
      an easy way for Quarkus users to generate native images for their
      applications. Developers using Quarkus should be able to go all the way
      from Java source code to lean, native, platform-dependent applications
      running on Linux. This capability is vital for deploying to containers
      in a cloud-native application development model.`,
  },
  {
    id: 'open',
    vendor: 'jdk.java.net',
    distribution: 'OpenJDK',
    url: 'https://jdk.java.net/',
    description: `OpenJDK (Open Java Development Kit) is a free and open-source
      implementation of the Java Platform, Standard Edition (Java SE). It is the
      result of an effort Sun Microsystems began in 2006. The implementation is
      licensed under the GNU General Public License (GNU GPL) version 2 with a
      linking exception. Were it not for the GPL linking exception, components
      that linked to the Java class library would be subject to the terms of the
      GPL license. OpenJDK is the official reference implementation of Java SE
      since version 7.`,
  },
  {
    id: 'ms',
    vendor: 'Microsoft',
    distribution: 'OpenJDK',
    url: 'https://www.microsoft.com/openjdk',
    description: `The Microsoft Build of OpenJDK is a no-cost distribution of OpenJDK that's
      open source and available for free for anyone to deploy anywhere. It
      includes Long-Term Support (LTS) binaries for Java 11 on x64 server and
      desktop environments on macOS, Linux, and Windows, and AArch64/ARM64 on
      Linux and Windows. Microsoft also publishes Java 16 binaries for all three
      major Operating Systems and both x64 and AArch64 (M1/ARM64) architectures.`,
  },
  {
    id: 'sapmchn',
    vendor: 'SAP',
    distribution: 'SapMachine',
    url: 'https://sap.github.io/SapMachine/',
    description: `SapMachine is a downstream version of the OpenJDK
      project. It is used to build and maintain a SAP supported version of
      OpenJDK for SAP customers and partners who wish to use OpenJDK to run their
      applications. SAP is committed to ensuring the continued success of the
      Java platform.`,
  },
  {
    id: 'sem',
    vendor: 'IBM',
    distribution: 'Semeru',
    url: 'https://developer.ibm.com/languages/java/semeru-runtimes/',
    description: `Semeru Runtimes use the class libraries from OpenJDK, along with
      the Eclipse OpenJ9 Java Virtual Machine to enable developers to build
      and deploy Java applications that will start quickly, deliver great
      performance, all while using less memory.`,
  },
  {
    id: 'tem',
    vendor: 'Eclipse',
    distribution: 'Temurin',
    url: 'https://projects.eclipse.org/projects/adoptium.temurin',
    description: `Formerly AdoptOpenJDK, the Eclipse Adoptium Temurin™ project provides
      code and processes that support the building of runtime binaries and
      associated technologies that are high performance, enterprise-caliber,
      cross-platform, open-source licensed, and Java SE TCK-tested for general
      use across the Java ecosystem.`,
  },
  {
    id: 'trava',
    vendor: 'Trava',
    distribution: 'Trava',
    url: 'https://github.com/TravaOpenJDK/trava-jdk-11-dcevm',
    description: `TravaOpenJDK is OpenJDK for developers. It is based on dcevm
      and uses an integrated HotswapAgent, so allowing advanced hotswapping of
      classes by method and field addition or updates at runtime.`,
  },
  {
    id: 'zulu',
    vendor: 'Azul Systems',
    distribution: 'Zulu',
    url: 'https://www.azul.com/downloads/zulu/',
    description: `Azul Zulu Builds of OpenJDK are no-cost, production-ready open-source, TCK-tested,
      and certified OpenJDK distributions. They are available for a wide range of hardware
      platforms and operating systems and are compatible with special requirements, such
      as stripped-down JREs and builds, including OpenJFX and Coordinated Restore at
      Checkpoint (CRaC). They are supported as part of Azul Platform Core, which provides
      stabilized security updates for rapid, assured deployment into production and
      solution-oriented engineering assistance.`,
  },
];

export default vendors;
