// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  whiteList: ['https://ecours-backend-production.herokuapp.com'],
  api: {
    auth: {
      login: 'http://localhost:8082/api/auth/signin',
      signup: 'http://localhost:8082/api/auth/signup/student'
    },
    lessons: {
      all: 'http://localhost:8082/api/lessons',
      byId: 'http://localhost:8082/api/lessons/${id}'
    },
    domains: {
      all: 'http://localhost:8082/api/domains'
    },
    professors: {
      all: 'http://localhost:8082/api/professors',
      update: 'http://localhost:8082/api/professors/${id}',
      create: 'http://localhost:8082/api/professors',
      delete: 'http://localhost:8082/api/professors/${id}'
    },
    students: {
      all: 'http://localhost:8082/api/students',
      update: 'http://localhost:8082/api/students/${id}',
      create: 'http://localhost:8082/api/students',
      delete: 'http://localhost:8082/api/students/${id}'
    },
    sites: {
      all: 'http://localhost:8082/api/sites'
    }
  },
  mock: {
    auth: {
      login: '/assets/mock/login.json'
    },
    cours: {
      search: '/assets/mock/cours.json',
      findById: '/assets/mock/cours-${id}.json'
    },
    themes: {
      findAll: '/assets/mock/themes.json'
    },
    enseignants: {
      findAll: '/assets/mock/enseignants.json'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
