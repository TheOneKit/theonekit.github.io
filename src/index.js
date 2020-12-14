(function () {

  const {
    MuiThemeProvider,
    createMuiTheme,
    makeStyles,
  } = material.core;

  const TabPanel = ({
    children,
    value,
    index,
    ...other 
  }) => (
    <Fragment>
      {value === index && 
        <Box
          role="tabpanel"
          hidden={value !== index}
          aria-labelledby={`wrapped-tab-${index}`}
          {...other}
        >
          {children}
        </Box>
      }
    </Fragment>
  );

  const THEME_DARK = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#90cbf9',
      },
      secondary: {
        main: '#f48fb1',
      },
      text: {
        primary: "#fff",
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        hint: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)"
      },
      background: {
        paper: "#424242",
        default: "#212121",
        level2: "#333333",
        level1: "#212121"
      },
    },
  });

  const THEME_LIGHT = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#dc004e',
      },
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.54)",
        disabled: "rgba(0, 0, 0, 0.38)",
        hint: "rgba(0, 0, 0, 0.38)",
      },
      background: {
        default: "#fff",
        level1: "#fff",
        level2: "#f5f5f5",
        paper: "#f5f5f5",
      },
    }
  });

  const ReactIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={46}
      height={51}
      viewBox="-0.5 -0.5 46 51"
    >
      <g stroke="#61dafb" pointerEvents="all">
        <ellipse
          cx={22.5}
          cy={24.77}
          rx={22.5}
          ry={10}
          fill="none"
          transform="rotate(-240 22.5 24.77)"
        />
        <ellipse cx={22.5} cy={24.77} rx={4.885} ry={5.59} fill="#61dafb" />
        <ellipse
          cx={22.5}
          cy={24.77}
          rx={22.5}
          ry={10}
          fill="none"
          transform="rotate(60 22.5 24.77)"
        />
        <ellipse
          cx={22.5}
          cy={24.48}
          rx={22.5}
          ry={10.295}
          fill="none"
          transform="rotate(-180 22.5 24.48)"
        />
      </g>
    </svg>
  );

  const openBlank = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.click();
  };


  const isDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isScrolled = () => window.scrollY > 10;

  const {
    createElement: h,
    createContext,
  } = React;

  const {
    useLayoutEffect,
    useContext,
    useEffect,
    useState,
    useRef,
  } = React;

  const {
    Fragment,
  } = React;

  const {
    CssBaseline,
    Container,
    Paper,
    Tabs,
    Box,
    Tab,
  } = material.core;

  const {
    Typography,
    IconButton,
    Button,
    Link,
  } = material.core;

  const {
    Star,
    GitHub,
    Brightness7,
    Brightness4,
    VolumeDown,
    VolumeUp,
  } = material.icons;

  const {
    One,
    FieldType,
  } = form;

  const Rect = ({children}) => (
    <Paper>
      <Box display="flex" alignItems="center" justifyContent="center" p={1}>
        {children}
      </Box>
    </Paper>
  );

  const useHeadlineStyles = makeStyles(({ palette: { type } }) => ({
    root: {
      position: 'fixed',
      padding: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'stretch',
      top: '0px',
      left: '0px',
      right: '0px',
      height: '55px',
      width: '100vw',
      background: 'none',
      transition: 'background 1s',
      zIndex: 9999,
    },
    filled: {
      backdropFilter: 'saturate(180%) blur(20px)',
      backgroundColor: type === 'dark' ? '#e443' : '#0008',
      '& *:not($logo)': {
        color: 'white',
      }
    },
    stretch: {
      paddingTop: '5px',
      flex: 1,
    },
    adjust: {
      paddingTop: '55px',
    },
    logo: {
      color: type === 'dark' ? 'white !important' : '#ec4744 !important',
      '& *': {
        color: type === 'dark' ? 'white !important' : '#ec4744 !important',
      },
    },
  }));

  const DarkModeContext = createContext(false);

  const Headline = ({
    onIsDarkChange = (dark) => console.log({ dark }),
    onGithubClick = () => console.log('gh'),
    isFilled = false,
    isDark,
  }) => {
    const classes = useHeadlineStyles();
    return (
      <Fragment>
        <Box className={classNames(classes.root, {
          [classes.filled]: isFilled,
        })}>
          <IconButton className={classes.logo}>
            <Star className={classes.logo} />
          </IconButton>
          <Typography className={classes.stretch} variant="h6">
            One
          </Typography>
          <Button onClick={() => openBlank('https://jsfiddle.net/tripolskypetr/g5qhwtmx/')}>
            Try it NOW!
          </Button>
          <IconButton onClick={onIsDarkChange}>
            {h(isDark ? Brightness7 : Brightness4)}
          </IconButton>
          <IconButton onClick={onGithubClick}>
            <GitHub />
          </IconButton>
        </Box>
        <div className={classes.adjust} />
      </Fragment>
    );
  };

  const useHeaderStyles = makeStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: '55px',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '30px',
      '& *': {
        whiteSpace: 'nowrap',
      },
    },
    desc: {
      flex: 1,
    },
    star: {
      fontSize: '250px',
      textShadow: '#61d9f9 1px 0 1px',
      color: '#ec4744',
    },
    react: {
      display: 'flex',
      alignItems: 'center',
      color: '#61dafb',
      paddingTop: '5px',
      '& svg': {
        paddingRight: '5px'
      }
    },
    adjust: {
      maxWidth: '150px',
      flexGrow: 1,
      flexShrink: 0,
    }
  });

  const Header = ({
    onIsDarkChange = (dark) => console.log(dark),
    isDark = false,
  }) => {
    const classes = useHeaderStyles();
    const [isFilled, setIsFilled] = useState(isScrolled());
    useEffect(() => {
      const interval = setInterval(() => {
        if (isScrolled() && !isFilled) {
          setIsFilled(true);
        } else if (!isScrolled() && isFilled) {
          setIsFilled(false);
        }
      });
      return () => clearInterval(interval);
    }, [isFilled]);
    return (
      <Fragment>
        <Headline
          onIsDarkChange={onIsDarkChange}
          onGithubClick={() => openBlank('https://github.com/tripolskypetr/material-ui-umd/')}
          isFilled={isFilled}
          isDark={isDark}
        />
        <Box className={classes.root}>
          <Box display="flex" className={classes.container}>
            <Star
              className={classes.star}
            />
            <Box className={classes.desc}>
              <Typography variant="h2">
                The One
              </Typography>
              <Typography variant="body1">
                most advanced form creation kit for
              </Typography>
              <Typography variant="h5" className={classes.react}>
                <ReactIcon />
                React
              </Typography>
            </Box>
          </Box>
          <Box className={classes.adjust} />
        </Box>
      </Fragment>
    );
  };

  const Editor = ({
    lines = [ "" ],
  }) => {
    const isDark = useContext(DarkModeContext);
    const elementRef = useRef(null);
    const aceRef = useRef(null);
    useLayoutEffect(() => {
      const editor = ace.edit(elementRef.current);
      editor.session.setMode("ace/mode/javascript");
      editor.getSession().setUseWorker(false);
      aceRef.current = editor;
    }, []);
    useLayoutEffect(() => {
      if (isDark) {
        aceRef.current.setTheme("ace/theme/twilight");
      } else {
        aceRef.current.setTheme("ace/theme/chrome");
      }
    }, [isDark]);
    return (
      <pre ref={elementRef}>
        {lines.join('\n')}
      </pre>
    )
  };

  const useDemoStyles = makeStyles(({ palette: { type } }) => ({
    root: {
      minHeight: 'max(50vh, 20vw)',
      position: 'relative',
      marginBottom: '25px',
    },
    tab: {
      height: 'calc(100% - 48px)',
    },
    demo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px',
      background: type === 'dark' ? '#0003' : '#0001',
    },
    editor: {
      display: 'flex',
      alignItems: 'stretch',
      justifyContent: 'stretch',
      '& > *:nth-child(1)': {
        flex: 1,
        marginTop: '0px',
        marginBottom: '-5px',
      },
    }
  }));

  const Demo = ({
    lines = [""],
  }) => {
    const classes = useDemoStyles();
    const [index, setIndex] = useState(0);
    return (
      <Paper className={classes.root}>
        <Tabs
            value={index}
            indicatorColor="primary"
            textColor="primary"
            onChange={({}, newValue) => setIndex(newValue)}
            aria-label="disabled tabs example"
          >
          <Tab label="Demo" />
          <Tab label="Source" />
        </Tabs>
        <TabPanel className={classNames(classes.tab, classes.demo)} value={index} index={0}>
          { eval(Babel.transform(lines.join('\n'), { presets: ['env', 'react'] }).code) }
        </TabPanel>
        <TabPanel className={classNames(classes.tab, classes.editor)} value={index} index={1}>
          <Editor lines={lines} />
        </TabPanel>
      </Paper>
    );
  };

  const Hero = ({
    title = 'Title',
    description = 'Description',
    lines = [""],
  }) => (
    <One fields={[
      {
        type: FieldType.Group,
        phoneColumns: '12',
        tabletColumns: '5',
        desktopColumns: '4',
        fields: [
          {
            type: FieldType.Component,
            compute: () => (
              <Typography variant="h3">
                {title}
              </Typography>
            ),
          },
          {
            type: FieldType.Component,
            compute: () => (
              <Typography variant="body1">
                {description.join(' ')}
              </Typography>
            ),
          },
        ],
      },
      {
        type: FieldType.Group,
        phoneColumns: '12',
        tabletColumns: '7',
        desktopColumns: '8',
        fields: [
          {
            type: FieldType.Component,
            compute: () => <Demo lines={lines} />,
          }
        ],
      }
    ]} />
  );

  const Content = () => {
    const [samples, setSamples] = useState(null);
    useEffect(() => {
      const process = async () => {
        const {origin} = location;
        const data = await fetch(`${origin}/samples.json`);
        const json = await data.json();
        setSamples(json);
      };
      process();
    }, []);
    return (
      <Fragment>
        {samples?.map((props, idx) => <Hero {...props} key={idx}/>)}
      </Fragment>
    );
  };

  const App = () => {
    const [isDark, setIsDark] = useState(isDarkMode());
    return (
      <MuiThemeProvider theme={isDark ? THEME_DARK : THEME_LIGHT}>
        <DarkModeContext.Provider value={isDark}>
          <CssBaseline />
          <Header
            onIsDarkChange={() => setIsDark(!isDark)}
            isDark={isDark}
          />
          <Container>
            <Content isDark={isDark} />
          </Container>
        </DarkModeContext.Provider>
      </MuiThemeProvider>
    );
  };

  ReactDOM.render(<App />, document.querySelector('#mount-point'));

})();
