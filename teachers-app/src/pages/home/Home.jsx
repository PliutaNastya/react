import heroImage from "@/assets/img/hero_image.webp";
import BrowseTeachers from "@/components/ButtonBrowseTeachers";
import ButtonViewMeeting from "@/components/ButtonViewMeeting";

function Home() {
	return (
		<section className="home">
			<div className="home__container">
				<div className="home__bg">
					<img src={heroImage} alt="Hero Image" />
				</div>
				<div className="home__content">
					<h1>Welcome to the “EduStaff” App!</h1>
					<p>EduStaff lets you easily organize teacher profiles, schedule meeting participants, and discover details about the app’s development.</p>
					<div className="home__actions">
						<BrowseTeachers />
						<ButtonViewMeeting />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home