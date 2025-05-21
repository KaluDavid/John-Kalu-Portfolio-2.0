export default function useRedirect({
  redirectLink,
}: {
  redirectLink: string;
}) {
  function handleRedirect() {
    window.open(`${redirectLink}`, "_blank", "noopener,noreferrer");
  }
  return handleRedirect;
}
