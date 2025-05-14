import generateSDKs from './sdks';

async function run() {
  try {
    await generateSDKs();
  } catch (err) {
    console.error(err);
  }
}

run();
