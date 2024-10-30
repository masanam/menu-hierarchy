import React from 'react'
import Layout from './Layout'
import { Head } from '@inertiajs/inertia-react'

export default function About({  }) {
  return (
    <Layout>
      <Head title="About" />
        <section className="is-title-bar">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <ul>
              <li>Admin</li>
              <li>About</li>
            </ul>
          </div>
      </section>
    </Layout>
  )
}
