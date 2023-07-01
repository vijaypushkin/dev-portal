export function devPortal(): string {
  return 'dev-portal';
}

export const initialize = (options = {}) => {
  const PORTAL_ROOT_ID = 'dev-portal-root';

  // ? Check if the root element already exists
  const prevRootElement = document.getElementById(PORTAL_ROOT_ID);
  if (prevRootElement) {
    console.warn(
      `The root element with id "${PORTAL_ROOT_ID}" already exists.`,
    );
    return;
  }

  // Create the root element
  const rootElement = document.createElement('div');
  rootElement.id = 'dev-portal-root';

  // Append the root element to the DOM
  document.body.appendChild(rootElement);
};
