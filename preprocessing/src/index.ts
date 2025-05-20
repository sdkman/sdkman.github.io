import generateJDKs from './jdks';
import generateSDKs from './sdks';

async function run() {
  try {
    await Promise.all([generateJDKs(), generateSDKs()]);
  } catch (err) {
    console.error(err);
  }
}

run();
