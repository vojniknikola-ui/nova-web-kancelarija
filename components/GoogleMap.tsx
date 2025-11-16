export default function GoogleMap() {
  return (
    <div className="overflow-hidden rounded-2xl shadow">
      <iframe
        title="Lokacija Andrić Law"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.0237397946043!2d18.405483!3d43.856258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758c92c42d797ff%3A0x35f12b90d2fd551!2sSarajevo!5e0!3m2!1sen!2sba!4v1707842912345!5m2!1sen!2sba"
        width="100%"
        height="350"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full"
      />
    </div>
  );
}
