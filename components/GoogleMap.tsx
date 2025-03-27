'use client';

const GoogleMap = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.9336792943745!2d8.109785584929368!3d35.408538195434765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f9ed000d77f709%3A0xb301f3c7a8806d81!2slevl%20business!5e0!3m2!1sen!2sdz!4v1743076062751!5m2!1sen!2sdz"
        width="800"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;
