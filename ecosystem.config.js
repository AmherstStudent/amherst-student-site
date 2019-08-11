module.exports = {
  apps : [{
    name      : 'next',
    script    : 'client/server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production'
    }
  },
  {
    name: 'server',
    script : 'server/server.js',
    env: {
      NODE_ENV: 'development'
    },
    env_production : {
      NODE_ENV: 'production',
      DATABASE_HOST: '',
      DATABASE_PORT: '',
      DATABASE_NAME: '', 
      DATABASE_USERNAME: '',
      DATABASE_PASSWORD: '',
    }
  }

],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:AmherstStudent/amherst-student-site.git',
      path : '/amherst-student-site',
      'post-deploy' : 'cd client && next build;   && pm2 reload ecosystem.config.js --env production'
    }
  }
};
