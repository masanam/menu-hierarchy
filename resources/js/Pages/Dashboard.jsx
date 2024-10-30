import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'

export default function Dashboard({  }) {
  return (
    <Layout>
      <Head title="Dashboard" />
        <section className="is-title-bar">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <ul>
              <li>Admin</li>
              <li>Dashboard</li>
            </ul>
          </div>
      </section>
    </Layout>
  )
}
