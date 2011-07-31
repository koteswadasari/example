﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Security.Application;
using AjaxControlToolkit.Sanitizer;

namespace AjaxControlToolkit.Sanitizer {
    class AntiXssSanitizerProvider: SanitizerProvider {

  
        private string _applicationName;
        public override string ApplicationName {
            get {
                return _applicationName;
            }
            set {
                _applicationName = value;
            }

        }

        public override bool RequiresFullTrust {
            get {
                return true;
            }
        }

        public override string GetSafeHtmlFragment(string htmlFragment) {
            return Microsoft.Security.Application.Sanitizer.GetSafeHtmlFragment(htmlFragment);
        }

    }
}
