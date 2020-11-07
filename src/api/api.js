
export const authAPI = {
    authorizeByEmail: async ({email, password}) => {
        try {
            const response = await fetch('/api/auth/login', { method: 'POST', body: {email, password}, headers: {
            }})
            const data = await response.json();
            
            if (!response.ok) {
                throw new Error(data.message || 'Что-то пошло не так')
            }
                
            return data;
        } catch (e) {
        }
    }
}



