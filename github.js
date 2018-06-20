class GitHub {
    constructor(){
        this.client_id = '6f6d944edfe154261ec9';
        this.client_secret = '6f99629144db195bb55c02db7a7daaa0d0658a85';
    }
    
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profileData = await profileResponse.json();
        
        return {
            profile: profileData
        }
    }
}