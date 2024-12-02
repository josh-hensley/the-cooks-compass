import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // return the decoded token
    const token = this.getToken();
    const decodedToken = jwtDecode(token);
    return decodedToken;
  }

  loggedIn() {
    // return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // return a value that indicates if the token is expired
    const payload: JwtPayload = jwtDecode(token);
    return payload.exp === 0;
  }

  getToken(): string {
    // return the token
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string) {
    // set the token to localStorage and load homepage;
    localStorage.setItem('id_token', idToken);
    window.location.assign('/')
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
