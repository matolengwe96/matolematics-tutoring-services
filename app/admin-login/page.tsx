import Link from "next/link"

type AdminLoginPageProps = {
  searchParams?: Promise<{
    error?: string
  }>
}

function getErrorMessage(error?: string) {
  if (error === "invalid_password") {
    return "Incorrect password. Please try again."
  }

  if (error === "server_error") {
    return "Something went wrong. Please try again."
  }

  return ""
}

export default async function AdminLoginPage(props: AdminLoginPageProps) {
  const searchParams = await props.searchParams
  const errorMessage = getErrorMessage(searchParams?.error)

  return (
    <div className="admin-login-page">
      <div className="container">
        <div className="admin-login-card">
          <p className="section-kicker">Protected area</p>
          <h1 className="section-title">Admin login</h1>
          <p className="section-description section-description-left">
            Enter the admin password to view tutor requests, contact messages, and tutor profiles.
          </p>

          <form action="/api/admin-login" method="POST" className="admin-login-form">
            <div className="form-field">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter admin password"
                required
              />
            </div>

            {errorMessage ? (
              <p className="form-message form-message-error">{errorMessage}</p>
            ) : null}

            <div className="form-actions">
              <button type="submit" className="button button-primary">
                Sign in
              </button>

              <Link href="/" className="button button-secondary">
                Back home
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}