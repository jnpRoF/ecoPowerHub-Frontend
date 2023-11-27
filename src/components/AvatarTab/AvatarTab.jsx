const AvatarTab = ({ src, alt, projectName, className }) => {
    return (
        <div className={className}>
            <img src={src} alt={alt} className="w-6 h-6" />
            <p className="text-sm">{projectName}</p>
        </div>
    )
}

export default AvatarTab
