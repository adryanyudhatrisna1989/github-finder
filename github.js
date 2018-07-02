class Github {
  constructor() {
    this.client_id = 'c93badf71c62fccc76dd'
    this.client_secret = '81dbaa5982ad7823c042bfc977281432138f21d5'
    this.repos_count = 6
    this.repos_sort = 'created: asc'
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json()
    const repos = await reposResponse.json()

    return {
      profile,
      repos
    }
  }
}