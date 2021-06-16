import React from 'react'
import { useHeadingsExtractor } from './hooks/useHeadingsExtractor'
import styles from './styles.module.css'
import { useActiveHeadingObserver } from './hooks/useActiveHeadingObserver'
import { Heading } from './models/heading.model'
import classNames from 'classnames'

interface TableOfContentsProps {
  className?: string
  activeClassName?: string
}

const TableOfContents: React.FC<TableOfContentsProps> = ({
  className,
  activeClassName,
}) => {
  const activeHeadingId = useActiveHeadingObserver()
  const headings = useHeadingsExtractor()

  return (
    <Headings
      headings={headings}
      activeHeadingId={activeHeadingId}
      className={className}
      activeClassName={activeClassName}
    />
  )
}

interface HeadingsProps extends TableOfContentsProps {
  headings: Heading[]
  activeHeadingId?: string
  className?: string
  activeClassName?: string
}

export const Headings: React.FC<HeadingsProps> = ({
  headings,
  activeHeadingId,
  className,
  activeClassName,
}) => {
  return (
    <ul className={classNames(styles.ul, className)}>
      {headings.map((heading) => (
        <li key={heading.id} className={classNames(styles.li)}>
          <a
            href={`#${heading.id}`}
            className={classNames(
              styles.link,
              activeHeadingId === heading.id && styles.active,
              activeHeadingId === heading.id && activeClassName,
            )}
            onClick={(e) => {
              e.preventDefault()

              if (!heading.id) {
                console.warn('heading id not found')
                return
              }

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
              activeClassName={activeClassName}
            />
          )}
        </li>
      ))}
    </ul>
  )
}

export default TableOfContents
