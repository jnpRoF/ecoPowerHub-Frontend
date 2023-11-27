const AvatarTab = ({ src, alt, avatarName, className }) => {
    return (
        <div className={className}>
            <img src={src} alt={alt} className="w-6 h-6" />
            <p className="text-sm">{avatarName}</p>
        </div>
    )
}

export default AvatarTab
