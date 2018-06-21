class GitHub {
    constructor(){
        this.client_id = '6f6d944edfe154261ec9';
        this.client_secret = '6f99629144db195bb55c02db7a7daaa0d0658a85';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();
        
        const repos = await repoResponse.json();
        
        return {
            profile: profileData,
            repos
        }
    }
}