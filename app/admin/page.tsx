import Link from "next/link"
import { redirect } from "next/navigation"
import { supabaseAdmin } from "@/lib/supabase"
import { requireAdminSession } from "@/lib/admin-session"

export const dynamic = "force-dynamic"

type AdminPageProps = {
  searchParams?: Promise<{
    q?: string
    status?: string
  }>
}

type TutorRequest = {
  id: string
  subject: string
  level: string
  budget: string | null
  frequency: string | null
  goals: string
  status: string
  created_at: string
}

type ContactMessage = {
  id: string
  name: string
  email: string
  subject: string
  phone: string | null
  message: string
  status: string
  created_at: string
}

type TutorProfile = {
  id: string
  full_name: string
  email: string | null
  phone: string | null
  subjects: string[]
  levels: string[]
  delivery_modes: string[]
  bio: string
  linkedin_url: string | null
  rate_from: number | null
  rate_to: number | null
  status: string
  created_at: string
}

function formatDate(value: string) {
  return new Date(value).toLocaleString()
}

function matchesSearch(value: string, query: string) {
  return value.toLowerCase().includes(query.toLowerCase())
}

function ChipList({ items }: { items?: string[] | null }) {
  if (!items || items.length === 0) {
    return <span>—</span>
  }

  return (
    <div className="chip-list">
      {items.map((item) => (
        <span key={item} className="chip">
          {item}
        </span>
      ))}
    </div>
  )
}

export default async function AdminDashboardPage(props: AdminPageProps) {
  if (!requireAdminSession()) {
    redirect("/admin-login")
  }

  if (!supabaseAdmin) {
    return (
      <div className="admin-page">
        <div className="container">
          <div className="admin-error-card">
            <p className="section-kicker">Admin</p>
            <h1 className="section-title">Dashboard unavailable</h1>
            <p className="section-description section-description-left">
              Your Supabase server client is not configured. Check `.env.local`
              and restart the dev server.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const searchParams = await props.searchParams
  const query = (searchParams?.q ?? "").trim()
  const statusFilter = (searchParams?.status ?? "all").trim()

  const [
    { data: tutorRequests, error: tutorRequestsError },
    { data: contactMessages, error: contactMessagesError },
    { data: tutors, error: tutorsError },
  ] = await Promise.all([
    supabaseAdmin
      .from("tutor_requests")
      .select("*")
      .order("created_at", { ascending: false }),
    supabaseAdmin
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false }),
    supabaseAdmin
      .from("tutors")
      .select("*")
      .order("created_at", { ascending: false }),
  ])

  let safeTutorRequests = (tutorRequests ?? []) as TutorRequest[]
  let safeContactMessages = (contactMessages ?? []) as ContactMessage[]
  let safeTutors = (tutors ?? []) as TutorProfile[]

  if (statusFilter !== "all") {
    safeTutorRequests = safeTutorRequests.filter(
      (item) => item.status === statusFilter
    )
    safeContactMessages = safeContactMessages.filter(
      (item) => item.status === statusFilter
    )
  }

  if (query) {
    safeTutorRequests = safeTutorRequests.filter((item) =>
      [
        item.subject,
        item.level,
        item.budget ?? "",
        item.frequency ?? "",
        item.goals,
        item.status,
      ].some((field) => matchesSearch(field, query))
    )

    safeContactMessages = safeContactMessages.filter((item) =>
      [
        item.name,
        item.email,
        item.subject,
        item.phone ?? "",
        item.message,
        item.status,
      ].some((field) => matchesSearch(field, query))
    )

    safeTutors = safeTutors.filter((item) =>
      [
        item.full_name,
        item.email ?? "",
        item.phone ?? "",
        item.bio,
        item.linkedin_url ?? "",
        item.status,
        item.subjects.join(", "),
        item.levels.join(", "),
        item.delivery_modes.join(", "),
      ].some((field) => matchesSearch(field, query))
    )
  }

  return (
    <div className="admin-page">
      <div className="container">
        <section className="admin-hero">
          <div>
            <p className="section-kicker">Admin dashboard</p>
            <h1 className="page-title">Matolematics operations</h1>
            <p className="page-description">
              Manage tutor requests, contact messages, and tutor profiles from one place.
            </p>
          </div>

          <div className="admin-hero-actions">
            <Link href="/find-a-tutor" className="button button-secondary">
              Open Find a Tutor
            </Link>

            <Link href="/contact" className="button button-primary">
              Open Contact
            </Link>

            <form action="/api/admin-logout" method="POST">
              <button type="submit" className="button button-secondary">
                Log out
              </button>
            </form>
          </div>
        </section>

        <form className="admin-filter-bar" method="GET">
          <div className="form-field">
            <label htmlFor="q">Search</label>
            <input
              id="q"
              name="q"
              type="text"
              defaultValue={query}
              placeholder="Search requests, messages, or tutors"
            />
          </div>

          <div className="form-field">
            <label htmlFor="status">Status</label>
            <select id="status" name="status" defaultValue={statusFilter}>
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="in_review">In review</option>
              <option value="contacted">Contacted</option>
              <option value="closed">Closed</option>
              <option value="active">Active tutors</option>
              <option value="inactive">Inactive tutors</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit" className="button button-primary">
              Apply filters
            </button>
            <Link href="/admin" className="button button-secondary">
              Reset
            </Link>
          </div>
        </form>

        <section className="admin-summary-grid">
          <article className="admin-stat-card">
            <span className="admin-stat-label">Tutor requests</span>
            <strong className="admin-stat-value">{safeTutorRequests.length}</strong>
          </article>

          <article className="admin-stat-card">
            <span className="admin-stat-label">Contact messages</span>
            <strong className="admin-stat-value">{safeContactMessages.length}</strong>
          </article>

          <article className="admin-stat-card">
            <span className="admin-stat-label">Tutor profiles</span>
            <strong className="admin-stat-value">{safeTutors.length}</strong>
          </article>
        </section>

        {tutorRequestsError ? (
          <div className="admin-error-card">
            <h2 className="admin-section-title">Tutor requests error</h2>
            <p>{tutorRequestsError.message}</p>
          </div>
        ) : null}

        {contactMessagesError ? (
          <div className="admin-error-card">
            <h2 className="admin-section-title">Contact messages error</h2>
            <p>{contactMessagesError.message}</p>
          </div>
        ) : null}

        {tutorsError ? (
          <div className="admin-error-card">
            <h2 className="admin-section-title">Tutors error</h2>
            <p>{tutorsError.message}</p>
          </div>
        ) : null}

        <section className="admin-section">
          <div className="admin-section-header">
            <div>
              <p className="section-kicker">Submissions</p>
              <h2 className="admin-section-title">Tutor requests</h2>
            </div>
          </div>

          <div className="admin-table-shell">
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Submitted</th>
                    <th>Status</th>
                    <th>Subject</th>
                    <th>Level</th>
                    <th>Budget</th>
                    <th>Frequency</th>
                    <th>Goals</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {safeTutorRequests.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="admin-empty-cell">
                        No tutor requests found.
                      </td>
                    </tr>
                  ) : (
                    safeTutorRequests.map((request) => (
                      <tr key={request.id}>
                        <td>{formatDate(request.created_at)}</td>
                        <td>
                          <span className={`status-pill status-${request.status}`}>
                            {request.status.replace("_", " ")}
                          </span>
                        </td>
                        <td>{request.subject}</td>
                        <td>{request.level}</td>
                        <td>{request.budget || "—"}</td>
                        <td>{request.frequency || "—"}</td>
                        <td className="admin-long-text">{request.goals}</td>
                        <td>
                          <div className="admin-inline-actions">
                            <form action="/api/admin/submissions" method="POST">
                              <input type="hidden" name="action" value="update_status" />
                              <input type="hidden" name="table" value="tutor_requests" />
                              <input type="hidden" name="id" value={request.id} />
                              <select name="status" defaultValue={request.status}>
                                <option value="new">New</option>
                                <option value="in_review">In review</option>
                                <option value="contacted">Contacted</option>
                                <option value="closed">Closed</option>
                              </select>
                              <button type="submit" className="button button-small button-secondary">
                                Update
                              </button>
                            </form>

                            <form action="/api/admin/submissions" method="POST">
                              <input type="hidden" name="action" value="delete" />
                              <input type="hidden" name="table" value="tutor_requests" />
                              <input type="hidden" name="id" value={request.id} />
                              <button type="submit" className="button button-small button-danger">
                                Delete
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="admin-section">
          <div className="admin-section-header">
            <div>
              <p className="section-kicker">Messages</p>
              <h2 className="admin-section-title">Contact messages</h2>
            </div>
          </div>

          <div className="admin-table-shell">
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Submitted</th>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Subject</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {safeContactMessages.length === 0 ? (
                    <tr>
                      <td colSpan={8} className="admin-empty-cell">
                        No contact messages found.
                      </td>
                    </tr>
                  ) : (
                    safeContactMessages.map((message) => (
                      <tr key={message.id}>
                        <td>{formatDate(message.created_at)}</td>
                        <td>
                          <span className={`status-pill status-${message.status}`}>
                            {message.status.replace("_", " ")}
                          </span>
                        </td>
                        <td>{message.name}</td>
                        <td>{message.email}</td>
                        <td>{message.subject}</td>
                        <td>{message.phone || "—"}</td>
                        <td className="admin-long-text">{message.message}</td>
                        <td>
                          <div className="admin-inline-actions">
                            <form action="/api/admin/submissions" method="POST">
                              <input type="hidden" name="action" value="update_status" />
                              <input type="hidden" name="table" value="contact_messages" />
                              <input type="hidden" name="id" value={message.id} />
                              <select name="status" defaultValue={message.status}>
                                <option value="new">New</option>
                                <option value="in_review">In review</option>
                                <option value="contacted">Contacted</option>
                                <option value="closed">Closed</option>
                              </select>
                              <button type="submit" className="button button-small button-secondary">
                                Update
                              </button>
                            </form>

                            <form action="/api/admin/submissions" method="POST">
                              <input type="hidden" name="action" value="delete" />
                              <input type="hidden" name="table" value="contact_messages" />
                              <input type="hidden" name="id" value={message.id} />
                              <button type="submit" className="button button-small button-danger">
                                Delete
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="tutors" className="admin-section">
          <div className="admin-section-header">
            <div>
              <p className="section-kicker">Tutor directory</p>
              <h2 className="admin-section-title">Tutor profiles</h2>
            </div>
          </div>

          <div className="admin-create-card">
            <h3 className="admin-subtitle">Add a tutor</h3>

            <form action="/api/admin/tutors" method="POST" className="contact-form">
              <input type="hidden" name="action" value="create" />

              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="full_name">Full name</label>
                  <input id="full_name" name="full_name" type="text" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" />
                </div>

                <div className="form-field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" type="text" />
                </div>

                <div className="form-field">
                  <label htmlFor="linkedin_url">LinkedIn</label>
                  <input id="linkedin_url" name="linkedin_url" type="url" />
                </div>

                <div className="form-field">
                  <label htmlFor="subjects">Subjects (comma separated)</label>
                  <input
                    id="subjects"
                    name="subjects"
                    type="text"
                    placeholder="Mathematics, Statistics, Coding"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="levels">Levels (comma separated)</label>
                  <input
                    id="levels"
                    name="levels"
                    type="text"
                    placeholder="High School, University"
                    required
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="delivery_modes">Delivery modes (comma separated)</label>
                  <input
                    id="delivery_modes"
                    name="delivery_modes"
                    type="text"
                    placeholder="Online, In-person"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="rate_from">Rate from</label>
                  <input id="rate_from" name="rate_from" type="number" min="0" step="0.01" />
                </div>

                <div className="form-field">
                  <label htmlFor="rate_to">Rate to</label>
                  <input id="rate_to" name="rate_to" type="number" min="0" step="0.01" />
                </div>

                <div className="form-field form-field-wide">
                  <label htmlFor="bio">Bio</label>
                  <textarea id="bio" name="bio" rows={5} required />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="button button-primary">
                  Create tutor profile
                </button>
              </div>
            </form>
          </div>

          <div className="admin-table-shell">
            <div className="admin-table-scroll">
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Created</th>
                    <th>Status</th>
                    <th>Name</th>
                    <th>Subjects</th>
                    <th>Levels</th>
                    <th>Modes</th>
                    <th>Rate</th>
                    <th>Contacts</th>
                    <th>Bio</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {safeTutors.length === 0 ? (
                    <tr>
                      <td colSpan={10} className="admin-empty-cell">
                        No tutor profiles yet.
                      </td>
                    </tr>
                  ) : (
                    safeTutors.map((tutor) => (
                      <tr key={tutor.id}>
                        <td>{formatDate(tutor.created_at)}</td>
                        <td>
                          <span className={`status-pill status-${tutor.status}`}>
                            {tutor.status}
                          </span>
                        </td>
                        <td>{tutor.full_name}</td>
                        <td>
                          <ChipList items={tutor.subjects} />
                        </td>
                        <td>
                          <ChipList items={tutor.levels} />
                        </td>
                        <td>
                          <ChipList items={tutor.delivery_modes} />
                        </td>
                        <td>
                          {tutor.rate_from || tutor.rate_to
                            ? `${tutor.rate_from ?? "?"} - ${tutor.rate_to ?? "?"}`
                            : "—"}
                        </td>
                        <td className="admin-long-text">
                          {tutor.email || "—"}
                          <br />
                          {tutor.phone || "—"}
                          <br />
                          {tutor.linkedin_url ? (
                            <a href={tutor.linkedin_url} target="_blank" rel="noreferrer">
                              LinkedIn
                            </a>
                          ) : (
                            "—"
                          )}
                        </td>
                        <td className="admin-long-text">{tutor.bio}</td>
                        <td>
                          <div className="admin-inline-actions">
                            <form action="/api/admin/tutors" method="POST">
                              <input type="hidden" name="action" value="update_status" />
                              <input type="hidden" name="id" value={tutor.id} />
                              <select name="status" defaultValue={tutor.status}>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                              </select>
                              <button type="submit" className="button button-small button-secondary">
                                Update
                              </button>
                            </form>

                            <form action="/api/admin/tutors" method="POST">
                              <input type="hidden" name="action" value="delete" />
                              <input type="hidden" name="id" value={tutor.id} />
                              <button type="submit" className="button button-small button-danger">
                                Delete
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}