export default function GithubUserDetails({ user }) {
  return (
    <div>
      <p> {user.login} </p>
      <img src={user.avatar_url} />
    </div>
  )
}
