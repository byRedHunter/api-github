class UI {
	constructor() {
		this.profile = document.getElementById('profile')
		this.repositories = document.getElementById('repositories')
	}

	showProfile(user) {
		this.profile.innerHTML = `
      <div class="card mt-4 animated bounceInLeft">
        <img src="${user.avatar_url}" class="card-img-top" />

        <div class="card-body">
          <h3 class="card-title text-center">${user.name} / ${user.login}</h3>

          <a class="btn btn-primary btn-block text-light mb-2" target="_blank" href="${user.html_url}">View Profile</a>

          <div class="w-100 d-flex justify-content-around my-2">
            <span class="badge badge-success">Followers: ${user.followers}</span>

            <span class="badge badge-primary">Following: ${user.following}</span>

            <span class="badge badge-warning">
            Company: ${user.company}
            </span>
          </div>

          <span class="badge badge-info d-block mt-2">
            Blog: 
            <a href="${user.blog}" target="_blank" class="text-dark">
              ${user.blog}
            </a>
          </span>
        </div>
      </div>
    `

		this.clearMessage()
	}

	showMessage(message, type) {
		// limpiamos el profile y su repo
		this.clearData()

		const div = document.createElement('div')
		div.className = type
		div.appendChild(document.createTextNode(message))

		const content = document.querySelector('.row')
		const profile = document.querySelector('#profile')
		content.insertBefore(div, profile)
	}

	clearMessage() {
		const alert = document.querySelector('.alert')

		if (alert) {
			alert.remove()
		}
	}

	clearData() {
		this.profile.innerHTML = ''
		this.repositories.innerHTML = ''
	}

	showRepositories(repositories) {
		let template = ''

		repositories.forEach((repo) => {
			template += `
        <div class="card card-body mt-4 animated bounceInUp">
          <div class="row">
            <div class="col-md-6">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>

            <div class="col-md-6">
              <span class="badge badge-primary">
                Language: ${repo.language}
              </span>

              <span class="badge badge-success">
                Forks: ${repo.forks_count}
              </span>
            </div>
          </div>
        </div>
      `
		})

		this.repositories.innerHTML = template
	}
}

module.exports = UI
