import { Application } from '@hotwired/stimulus';

const application = Application.start();

// Configure Stimulus development experience
application.debug = false;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
window.Stimulus = application;

export { application };
