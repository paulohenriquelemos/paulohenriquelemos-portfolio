interface ImageGreenProps {
  image: string
  border: boolean
}

export function ImageGreen({ image, border }: ImageGreenProps) {
  const borderImage =
    "after:content-[''] after:block after:absolute after:w-full after:h-full after:rounded after:transition-all after:duration-250 after:ease-cubic-bezier after:top-5 after:left-5 after:border-2 after:border-primary after:-z-10 hover:after:top-4 hover:after:left-4"
  const bgWork =
    "before:content-[''] before:absolute before:w-full before:h-full before:inset-0 before:z-10 before:bg-background before:mix-blend-screen before:transition-all md:hover:before:opacity-0 opacity-20 md:opacity-100 brightness-50 md:brightness-90 h-full"

  return (
    <div
      className={`bg-primary relative w-full rounded overflow-hiddenn group/image transition-all duration-250 ease-cubic-bezier ${
        border && borderImage
      } ${!border && bgWork}`}
    >
      <div
        className={`bg-background h-full rounded overflow-hidden mix-blend-multiply grayscale contrast-100 transition-all duration-250 ease-cubic-bezier ${
          border
            ? 'group-hover/image:grayscale-0 group-hover/image:mix-blend-normal'
            : 'md:group-hover/image:grayscale-0 md:group-hover/image:mix-blend-normal'
        }`}
      >
        <img src={image} alt="" className="object-cover h-full" />
      </div>
    </div>
  )
}
