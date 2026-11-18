import { describe, expect, it } from 'vitest'
import { formatRelativeTime } from './formatRelativeTime.js'

const now = new Date('2026-11-18T12:00:00.000Z')

describe('formatRelativeTime', () => {
  it('handles invalid dates', () => {
    expect(formatRelativeTime('not-a-date', now)).toBe('unknown time')
  })

  it('shows just now for less than a minute', () => {
    expect(formatRelativeTime('2026-11-18T11:59:30.000Z', now)).toBe('just now')
  })

  it('shows minutes and hours for recent posts', () => {
    expect(formatRelativeTime('2026-11-18T11:42:00.000Z', now)).toBe('18m ago')
    expect(formatRelativeTime('2026-11-18T09:00:00.000Z', now)).toBe('3h ago')
  })

  it('shows days and a calendar date for older posts', () => {
    expect(formatRelativeTime('2026-11-16T12:00:00.000Z', now)).toBe('2d ago')
    expect(formatRelativeTime('2026-11-08T12:00:00.000Z', now)).toBe('Nov 8')
  })
})
