import React from 'react'
import { useHeadingsExtractor } from './hooks/useHeadingsExtractor'
import styles from './styles.module.css'
import { useActiveHeadingObserver } from './hooks/useActiveHeadingObserver'
import { Heading } from './models/heading.model'
import classNames from 'classnames'

interface TableOfContentsProps {
  ulClassName?: string
  liClassName?: string
  linkClassName?: string
  activeLinkClassName?: string
}

export const TableOfContents: React.FC<TableOfContentsProps> = () => {
  const activeHeadingId = useActiveHeadingObserver()
  const headings = useHeadingsExtractor()

  return <Headings headings={headings} activeHeadingId={activeHeadingId} />
}

interface HeadingsProps extends TableOfContentsProps {
  headings: Heading[]
  activeHeadingId?: string
}

export const Headings: React.FC<HeadingsProps> = ({
  headings,
  activeHeadingId,
  ulClassName,
  liClassName,
  linkClassName,
  activeLinkClassName,
}) => {
  return (
    <ul className={classNames(styles.ul, ulClassName)}>
      {headings.map((heading) => (
        <li key={heading.id} className={classNames(styles.li, liClassName)}>
          <a
            href={`#${heading.id}`}
            className={classNames(
              styles.link,
              linkClassName,
              activeHeadingId === heading.id && styles.active,
              activeHeadingId === heading.id && activeLinkClassName,
            )}
            onClick={(e) => {
              e.preventDefault()
              document.querySelector(`#${heading.id}`)?.scrollIntoView({
                behavior: 'smooth',
              })
            }}
          >
            {heading.title}
          </a>
          {heading.items.length > 0 && (
            <Headings
              headings={heading.items}
              activeHeadingId={activeHeadingId}
            />
          )}
        </li>
      ))}
    </ul>
  )
}
