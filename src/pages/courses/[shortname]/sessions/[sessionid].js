import Link from 'next/link'
import React from 'react'

const sessionid = () => {
  return (
    <>
      <Link href={`/courses/ ${course.shortName}`}>hello</Link>

      <link
        href={{
          pathName: '/courses/[shortName]',
          query: {
            shortName: course.shortName,
          },
        }}
      >
        hello2
      </link>
    </>
  )
}

export default sessionid
