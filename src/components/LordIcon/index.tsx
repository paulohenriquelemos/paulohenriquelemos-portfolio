import lottie from 'lottie-web'
import { defineElement } from 'lord-icon-element'

defineElement(lottie.loadAnimation)

interface LordIconProps {
  src: string
  trigger: 'boomerang' | 'hover' | 'morph' | 'loop-on-hover' | 'loop'
  colorPrimary?: string
  colorSecondary?: string
  stroke: number
  width: number
  title?: string
}

export function LordIcon({
  src,
  trigger,
  colorPrimary = '#ccd6f6',
  colorSecondary = '#64ffda',
  stroke = 90,
  width,
  title,
}: LordIconProps) {
  return (
    <lord-icon
      src={`https://cdn.lordicon.com/${src}`}
      trigger={trigger}
      colors={`primary:${colorPrimary},secondary:${colorSecondary}`}
      stroke={stroke}
      style={{
        width: `${width}px`,
        height: `${width}px`,
      }}
      title={title}
    />
  )
}
