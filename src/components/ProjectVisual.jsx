export default function ProjectVisual({ image, alt }) {
  if (!image) return null
  return (
    <div className="pv">
      <img src={image} alt={alt || 'Project visual'} />
    </div>
  )
}
