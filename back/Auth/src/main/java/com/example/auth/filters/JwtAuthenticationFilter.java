package com.example.auth.filters;

import com.auth0.jwt.*;
import com.auth0.jwt.algorithms.*;
import com.fasterxml.jackson.databind.*;
import org.springframework.security.authentication.*;
import org.springframework.security.core.*;
import org.springframework.security.core.context.*;
import org.springframework.security.core.userdetails.*;
import org.springframework.security.web.authentication.*;

import javax.servlet.*;
import javax.servlet.http.*;
import java.io.*;
import java.util.*;

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private AuthenticationManager authenticationManager;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
        try {
            String email = request.getParameter("email");
            String password = request.getParameter("password");
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email, password);
            SecurityContextHolder.getContext().setAuthentication(authenticationToken);
            return authenticationManager.authenticate(authenticationToken);
        }
        catch (AuthenticationException e) {
            System.out.println(e);
            return null;
        }
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        User user = (User) authResult.getPrincipal();
        Algorithm algorithm = Algorithm.HMAC256("mySecret1234");
        System.out.println(user.getAuthorities());
        String jwtAccessToken = JWT.create().withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 5 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString()).withClaim("roles", String.valueOf(user.getAuthorities()))
                .sign(algorithm);
        String jwtRefreshToken = JWT.create().withSubject(user.getUsername())
                .withExpiresAt(new Date(System.currentTimeMillis() + 15 * 60 * 1000))
                .withIssuer(request.getRequestURL().toString())
                .sign(algorithm);
        Map<String, String> idToken = new HashMap<>();
        Optional<String> roleOpt = user.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .findFirst();
        System.out.println(jwtAccessToken);
        idToken.put("access-token", jwtAccessToken);
        idToken.put("refresh-token", jwtRefreshToken);
        idToken.put("email",user.getUsername());
        idToken.put("role", roleOpt.orElse(null));
        response.setContentType("application/json");
        System.out.println("--------------");
        System.out.println(jwtRefreshToken);
        new ObjectMapper().writeValue(response.getOutputStream(), idToken);

    }
}
