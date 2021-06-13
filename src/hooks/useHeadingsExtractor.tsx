import { useEffect, useState } from 'react'
import { Heading } from '../models/heading.model'

export const useHeadingsExtractor = () => {
  const [nestedHeadings, setNestedHeadings] = useState<Heading[]>([])

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll<HTMLHeadingElement>('h2, h3'),
    )

    const newNestedHeadings = getNestedHeadings(headingElements)
    setNestedHeadings(newNestedHeadings)
  }, [])

  return nestedHeadings
}

const getNestedHeadings = (headingElements: HTMLHeadingElement[]) => {
  const nestedHeadings: Heading[] = []

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading

    if (heading.nodeName === 'H2') {
      nestedHeadings.push({ id, title, items: [] })
    } else if (heading.nodeName === 'H3' && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
        items: [],
      })
    }
  })

  return nestedHeadings
}
