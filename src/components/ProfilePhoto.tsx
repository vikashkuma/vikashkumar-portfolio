import content from '../content';

const ProfilePhoto = () => (
  <div className="flex justify-center mb-2 sm:mb-3 mt-0">
    <img
      src={content.hero.profilePhoto.src}
      alt={content.hero.profilePhoto.alt}
      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full object-cover border-4 border-blue-500 shadow-lg"
    />
  </div>
);

export default ProfilePhoto; 