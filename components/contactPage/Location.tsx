
export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!4m2!3m1!1s0x31da11238a8b9375:0x887869cf52abf5c4?sa=X&ved=1t:242&ictx=111"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
    </div>
  )
}
