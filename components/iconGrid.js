function IconGrid({header, description, icons, children}) {
  return (
    <div class="container">
      <div class="flex items-center flex-col flex-nowrap mb-12">
        <h2 class="heading text-black mb-4">{header}</h2>
        <span class="w-24 h-1 mb-10 bg-primary"></span>
        {description && <p>{description}</p>}
      </div>
      <ul class="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-4">
        {icons.map(icon => (
          <div key={icon.label} class="flex items-center justify-center">
            <img class="object-center h-10 w-48" alt={icon.label} src={icon.icon} />
          </div>
        ))}
      </ul>
      {children && children}
    </div>
  );
}

export default IconGrid;