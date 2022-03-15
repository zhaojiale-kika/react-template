export default function access(
  initialState: { currentUser?: API.CurrentUser } | undefined,
) {
  const { currentUser } = initialState ?? {};
  return {
    sticker: currentUser && currentUser.role?.includes('sticker'),
    admin: currentUser && currentUser.role?.includes('admin'),
  };
}
